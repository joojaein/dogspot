package com.dogspot.web.controller;

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

@WebServlet("/upload")
@MultipartConfig( //멀티파트식 인코딩을 위한 어노테이션
		fileSizeThreshold=1024*1024,
		maxFileSize=1024*1024*10,//10메가 까지
		maxRequestSize=1024*1024*10*9//10메가 9개까지
)
public class UploadController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("upload");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
	    PrintWriter out = resp.getWriter();
      
		String path = req.getServletContext().getRealPath("/upload");
		
		File file = new File(path);
		if(!file.exists()) {
			file.mkdirs(); // 없으면 디렉토리 생성
		}
		
		Part part = req.getPart("file");
		String fileName = part.getSubmittedFileName();
		String filePath = path+File.separator + fileName;
		InputStream fis = part.getInputStream();
		OutputStream fos = new FileOutputStream(filePath);

		byte[] buf = new byte[1024];
		int size =1024;

		while((size=fis.read(buf))>=0) {
			fos.write(buf, 0, size);
			System.out.println(fileName +" / " +size);
		}

		fos.close();
		fis.close();

	    out.write(fileName);

	}
}



