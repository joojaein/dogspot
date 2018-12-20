package com.dogspot.web.controller.spot;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcSpotService;

@WebServlet("/detail-request")
public class DetailRequestController extends HttpServlet {

	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		System.out.println("������Ʈ�ѷ� �ߵ��Դܴ�..^^");
		int spotId = Integer.parseInt(request.getParameter("spotid"));
		String memberId = "ingyung";
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		
		if(title==null||title.equals(""))
			return;
		if(content==null||content.equals(""))
			return;
		
		System.out.println(title+","+content);
		
		SpotService service = new JdbcSpotService();
		int spotrequest = service.insertSpotRequest(spotId, memberId, title, content);
		if(spotrequest==1)
			System.out.println("�� ���� ��û!");
	}
}
