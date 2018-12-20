package com.dogspot.web.member;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.service.QuestionService;
import com.dogspot.web.service.jdbc.JdbcQuestionService;
import com.google.gson.Gson;


@WebServlet("/member/qna/list-delete")
public class DeleteListController extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		System.out.println("post!!!!!!!!!");
		// TODO Auto-generated method stub
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
		PrintWriter out = resp.getWriter();
		
		int qid = Integer.parseInt(req.getParameter("id"));
		
		System.out.println("qid : "+qid);
		QuestionService service = new JdbcQuestionService();
		int que = service.delQue(qid+"");

		

		
		System.out.println(que);
		
		out.write(que);

//		if(que == 0) {
//			System.out.println("null if");
//
//			out.write("");
//		}
//		else {
//
//			System.out.println("null else");
//			Gson gson = new Gson();
//			String json = gson.toJson(que);
//			out.write(json);
//		}
	}
}
