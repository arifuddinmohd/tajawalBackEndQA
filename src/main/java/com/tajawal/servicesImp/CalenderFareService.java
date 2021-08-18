package com.tajawal.servicesImp;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class CalenderFareService {

    public String getCalenderFareRequest(String sector, String depArrivalDate, String cabin,
                                         String pax, String stops, String airline, String airports) throws JSONException {

        JSONObject request = new JSONObject();
        request.put("leg", legInfomation(sector, depArrivalDate));
        request.put("cabin", cabin);
        request.put("pax", paxCount(pax));
        request.put("stops", stopsInfo(stops));
        request.put("airline", new JSONArray().put(airline));
        request.put("airports", getAirportsInfo(airports));
        System.out.println("Request :::: " + request);
        return request.toString();

    }

    public JSONArray legInfomation(String sec, String depArrDate) throws JSONException {

        JSONArray leg = new JSONArray();
        String[] secArr = sec.split("-");
        String[] depDate = depArrDate.split("-");
        for (int i = 0; i < secArr.length - 1; i++) {
            JSONObject legObject = new JSONObject();
            legObject.put("originId", secArr[i]);
            legObject.put("destinationId", secArr[i + 1]);
            legObject.put("departureFrom", getFutureDateWithYear(depDate[i]));
            legObject.put("departureTo", getFutureDateWithYear(depDate[i + 1]));
            leg.put(legObject);
        }
        return leg;
    }

    public JSONObject paxCount(String pax) throws JSONException {

        JSONObject paxObj = new JSONObject();
        int adult, child, infant;
        adult = Integer.parseInt(pax.substring(pax.indexOf("ADT") - 1, pax.indexOf("ADT")));
        child = Integer.parseInt(pax.substring(pax.indexOf("CNN") - 1, pax.indexOf("CNN")));
        infant = Integer.parseInt(pax.substring(pax.indexOf("INF") - 1, pax.indexOf("INF")));

        paxObj.put("adult", adult);
        paxObj.put("child", child);
        paxObj.put("infant", infant);

        return paxObj;
    }

    public JSONArray stopsInfo(String routeStop) {
        JSONArray stops = new JSONArray();
        stops.put(Integer.parseInt(routeStop));
        return stops;
    }

    public JSONObject getAirportsInfo(String sector) throws JSONException {

        Map<String, String> airportCity = new HashMap<>();
        airportCity.put("DUBAI", "DXB");
        airportCity.put("HYDERABAD", "HYD");
        airportCity.put("BOMBAY", "BOM");
        airportCity.put("DELHI", "DEL");
        airportCity.put("SYDNEY", "SYD");
        airportCity.put("LONDON", "LHR");

        JSONObject airports = new JSONObject();
        String[] route = sector.split("-");
        JSONArray dep = new JSONArray();
        JSONArray arr = new JSONArray();
        for (int i = 0; i < route.length - 1; i++) {
            dep.put(airportCity.get(route[i]));
            arr.put(airportCity.get(route[i + 1]));
        }
        JSONObject goingObj = new JSONObject();
        goingObj.put("departure", dep);
        goingObj.put("arrivals", arr);
        airports.put("going", goingObj);

        return airports;
    }

    public static String getFutureDateWithYear(String days) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Calendar calender = Calendar.getInstance();
        calender.add(Calendar.DATE, Integer.parseInt(days));
        return simpleDateFormat.format(calender.getTime());
    }

}
