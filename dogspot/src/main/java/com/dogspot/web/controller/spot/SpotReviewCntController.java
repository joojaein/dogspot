package com.dogspot.web.controller.spot;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcSpotService;
import com.google.gson.Gson;

@WebServlet("/spot-review-cnt")
public class SpotReviewCntController extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		int spotid = Integer.parseInt(request.getParameter("spotid"));
		System.out.println("들어가니.."+spotid);
		SpotService service = new JdbcSpotService();
		int reviewCnt = service.getReviewCount(spotid);
		//request.setAttribute("list", list);
		Gson gson = new Gson();
	      String json = gson.toJson(reviewCnt);
	      out.write(json);
		/*if(list ==null) {
			out.write("");
		}else {
			Gson gson = new Gson();
			String json = gson.toJson(list);
			out.write(json);	
		}*/
		
	}

}
