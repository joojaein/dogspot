package com.dogspot.web.entity;

import java.util.Date;

public class SpotRequest {
	private int spotid;
	private String memberid;
	private String title;
	private String content;
	private Date regdate;
	
	public SpotRequest(int spotid, String memberid, String title, String content) {

		this.spotid = spotid;
		this.memberid = memberid;
		this.title = title;
		this.content = content;
	}

	public int getSpotid() {
		return spotid;
	}

	public void setSpotid(int spotid) {
		this.spotid = spotid;
	}

	public String getMemberid() {
		return memberid;
	}

	public void setMemberid(String memberid) {
		this.memberid = memberid;
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

	@Override
	public String toString() {
		return "SpotRequest [spotid=" + spotid + ", memberid=" + memberid + ", title=" + title + ", content=" + content
				+ ", regdate=" + regdate + "]";
	}

	
}
