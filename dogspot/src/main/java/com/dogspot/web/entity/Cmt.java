package com.dogspot.web.entity;

import java.util.Date;

public class Cmt {
	private int id;
	private String content;
	private String regId;
	private int reviewId;
	private Date regDate;
	
	public Cmt() {
		// TODO Auto-generated constructor stub
	}
	
	public Cmt(String content, String regId, int reviewId) {
		super();
		this.content = content;
		this.regId = regId;
		this.reviewId = reviewId;
	}

	public Cmt(int id, String content, String regId, int reviewId) {
		super();
		this.id = id;
		this.content = content;
		this.regId = regId;
		this.reviewId = reviewId;
	}

	public Cmt(int id, String content, String regId, int reviewId, Date regDate) {
		super();
		this.id = id;
		this.content = content;
		this.regId = regId;
		this.reviewId = reviewId;
		this.regDate = regDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getRegId() {
		return regId;
	}

	public void setRegId(String regId) {
		this.regId = regId;
	}

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public Date getRegDate() {
		return regDate;
	}

	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	
	
}
