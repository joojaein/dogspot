package com.dogspot.web.controller.review;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Review;
import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.IndexService;
import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcIndexService;
import com.dogspot.web.service.jdbc.JdbcReviewService;
import com.dogspot.web.service.jdbc.JdbcSpotService;
import com.google.gson.Gson;

@WebServlet("/review-insert")
public class ReviewInsertController extends HttpServlet{
		
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
			req.setCharacterEncoding("UTF-8");
			resp.setCharacterEncoding("UTF-8");
			resp.setContentType("text/html;charset=UTF-8");
			PrintWriter out = resp.getWriter();
			
			String id = req.getParameter("id");
			String title = req.getParameter("title");
			String content = req.getParameter("content");
			String hashtag = req.getParameter("hashtag");
			
			ReviewService service = new JdbcReviewService();
			Review review = new Review(title, content, "joojaein", Integer.parseInt(id), hashtag);
			out.write(service.insert(review));
		}
	}
