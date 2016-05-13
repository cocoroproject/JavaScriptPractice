<%@page import="org.json.simple.JSONValue"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="java.util.ArrayList"%>
<%@page import="kosta.model.Employee"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	List<Employee> list = null;

	if(session.getAttribute("employees") == null){
		list = new ArrayList<Employee>();
		list.add(new Employee("aa", "aa", "aa"));
		list.add(new Employee("bb","bb", "bb"));
		list.add(new Employee("cc","cc", "cc"));
		 
		session.setAttribute("employees", list);
	}else{
		list = (List<Employee>)session.getAttribute("employees");
	}
	
	String id = request.getParameter("id");
	
	StringBuffer json2 = new StringBuffer();
	String line = null;
	JSONObject obj = null;
	
	try{
		 BufferedReader reader = request.getReader();
		while((line = reader.readLine()) != null){
			json2.append(line);
		} 
		
		obj = (JSONObject)JSONValue.parse(json2.toString());
		
	}catch(Exception e){
		e.printStackTrace();
	}
	
	//System.out.println(json2);
	
	if(id != null){
		for(int i=0;i<list.size();i++){
			Employee e = list.get(i);
			if(e.getId().equals(id)){
				list.remove(i);
			}
		}
	}else if(obj != null){
		System.out.println("ok");
		list.add(new Employee((String)obj.get("first"),
				(String)obj.get("first"),
				(String)obj.get("last")));
	}
	
	String json = JSONArray.fromObject(list).toString();
	out.print(json);

%>    