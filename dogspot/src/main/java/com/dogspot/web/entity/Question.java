package com.dogspot.web.entity;

import java.util.Date;

public class Question {
	
	private int id;
	private String title;
	private String content;
	private Date regdate;
	private String regid;
	private String ans_title;
	private Date ans_regdate;
	private String ans_regid;
	
	public Question() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Question(String title, String content) {
		super();
		this.title = title;
		this.content = content;
	}



	//member inserting
	public Question(int id,String title, String regid,Date regdate,String content) {

		this.id = id;
		this.title = title;
		this.regid = regid;
		this.regdate = regdate;
		this.content = content;
		
	}
	
	//admin inserting
	public Question(String ans_title, Date ans_regdate, String ans_regid) {
		super();
		this.ans_title = ans_title;
		this.ans_regdate = ans_regdate;
		this.ans_regid = ans_regid;
	}
	
	//selecting
	public Question(int id, String title, String content, Date regdate, String regid, String ans_title,
			Date ans_regdate, String ans_regid) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.regdate = regdate;
		this.regid = regid;
		this.ans_title = ans_title;
		this.ans_regdate = ans_regdate;
		this.ans_regid = ans_regid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	public String getRegid() {
		return regid;
	}
	public void setRegid(String regid) {
		this.regid = regid;
	}
	public String getAns_title() {
		return ans_title;
	}
	public void setAns_title(String ans_title) {
		this.ans_title = ans_title;
	}
	public Date getAns_regdate() {
		return ans_regdate;
	}
	public void setAns_regdate(Date ans_regdate) {
		this.ans_regdate = ans_regdate;
	}
	public String getAns_regid() {
		return ans_regid;
	}
	public void setAns_regid(String ans_regid) {
		this.ans_regid = ans_regid;
	}
	
	@Override
	public String toString() {
		return "Question [id=" + id + ", title=" + title + ", content=" + content + ", regdate=" + regdate + ", regid="
				+ regid + ", ans_title=" + ans_title + ", ans_regdate=" + ans_regdate + ", ans_regid=" + ans_regid
				+ "]";
	}
	
	
	
	
	
	
}
