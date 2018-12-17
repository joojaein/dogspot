package com.dogspot.web.entity;

import java.util.Date;

public class Review {
	private int id;
	private String title;
	private String content;
	private Date regdate;
	private String regId;
	private int spotId;
	private int hit;
	private String hashTag;
	
	public Review() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Review(String title, String content, String regId, int spotId, String hashTag) {
		super();
		this.title = title;
		this.content = content;
		this.regId = regId;
		this.spotId = spotId;
		this.hashTag = hashTag;
	}



	public Review(int id, String title, String content, Date regdate, String regId, int spotId, int hit,
			String hashTag) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.regdate = regdate;
		this.regId = regId;
		this.spotId = spotId;
		this.hit = hit;
		this.hashTag = hashTag;
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



	public String getRegId() {
		return regId;
	}



	public void setRegId(String regId) {
		this.regId = regId;
	}



	public int getSpotId() {
		return spotId;
	}



	public void setSpotId(int spotId) {
		this.spotId = spotId;
	}



	public int getHit() {
		return hit;
	}



	public void setHit(int hit) {
		this.hit = hit;
	}



	public String getHashTag() {
		return hashTag;
	}



	public void setHashTag(String hashTag) {
		this.hashTag = hashTag;
	}
	
	

}
