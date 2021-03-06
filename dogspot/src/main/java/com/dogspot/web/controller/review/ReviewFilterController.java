package com.dogspot.web.controller.review;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.IndexService;
import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcIndexService;
import com.dogspot.web.service.jdbc.JdbcReviewService;
import com.dogspot.web.service.jdbc.JdbcSpotService;
import com.google.gson.Gson;

@WebServlet("/review-filter")
public class ReviewFilterController extends HttpServlet{
		
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
			req.setCharacterEncoding("UTF-8");
			resp.setCharacterEncoding("UTF-8");
			resp.setContentType("text/html;charset=UTF-8");
			PrintWriter out = resp.getWriter();
			
			int filter = Integer.parseInt(req.getParameter("filter"));
			String query = req.getParameter("query");		
			
			ReviewService service = new JdbcReviewService();
			List<HashMap<String, String>> reviewList = service.getReviewsDataView(query,filter);
						
			if(reviewList ==null) {
				out.write("");
			}else {

				Gson gson = new Gson();
				String json = gson.toJson(reviewList);
				out.write(json);	

			}		
		}
	}
