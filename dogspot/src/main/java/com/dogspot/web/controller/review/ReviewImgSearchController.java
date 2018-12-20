package com.dogspot.web.controller.review;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.jdbc.JdbcReviewService;

@WebServlet("/review-img-search")
public class ReviewImgSearchController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
	    PrintWriter out = resp.getWriter();
      
		String reviewId = req.getParameter("reviewId");
		ReviewService service = new JdbcReviewService();
		String src = service.getReviewImgSrc(Integer.parseInt(reviewId));
		if(src=="") {
		    out.write("/images/img404.png");
		    return;
		}
	    out.write("reviewUpload/"+src);
	}
}



