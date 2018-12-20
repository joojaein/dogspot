package com.dogspot.web.controller.review;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.jdbc.JdbcReviewService;
import com.google.gson.Gson;

@WebServlet("/get-comments")
public class GetCommentsController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
	    PrintWriter out = resp.getWriter();

	    String reviewId = req.getParameter("reviewId");
	   
	    List<Cmt> cmtList = new ArrayList();

		ReviewService service = new JdbcReviewService();
		cmtList = service.getCmtList(Integer.parseInt(reviewId));
		
		if(cmtList.size()==0) {
			out.write("");
		}else {
			Gson gson = new Gson();
			String json = gson.toJson(cmtList);
			out.write(json);
		}	
	}
}



