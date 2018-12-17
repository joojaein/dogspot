package com.dogspot.web.entity;

public class Favorite {
	private String memberId;
	private int spotId;
	
	public Favorite() {
		// TODO Auto-generated constructor stub
	}
	
	public Favorite(String memberId, int spotId) {
		super();
		this.memberId = memberId;
		this.spotId = spotId;
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public int getSpotId() {
		return spotId;
	}

	public void setSpotId(int spotId) {
		this.spotId = spotId;
	}
	
	
}
