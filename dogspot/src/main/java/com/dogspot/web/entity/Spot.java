package com.dogspot.web.entity;

import java.util.Date;

public class Spot {
	private int id;
	private String name;
	private String addr;
	private String phone;
	private String time;
	private String timeETC;
	private String dogsize;
	private String dogsizeETC;
	private String dogweight;
	private String dogweightETC;
	private String priceMin;
	private String priceMax;
	private String priceETC;
	private String url;
	private String etc;
	private Date regdate;
	private int themeId;
	private String themeETC;
	
	public Spot() {
		// TODO Auto-generated constructor stub
	}

	public Spot(int id, String name, String addr, String phone, String time, String timeETC, String dogsize,
			String dogsizeETC, String dogweight, String dogweightETC, String priceMin, String priceMax, String priceETC,
			String url, String etc, Date regdate, int themeId, String themeETC) {
		super();
		this.id = id;
		this.name = name;
		this.addr = addr;
		this.phone = phone;
		this.time = time;
		this.timeETC = timeETC;
		this.dogsize = dogsize;
		this.dogsizeETC = dogsizeETC;
		this.dogweight = dogweight;
		this.dogweightETC = dogweightETC;
		this.priceMin = priceMin;
		this.priceMax = priceMax;
		this.priceETC = priceETC;
		this.url = url;
		this.etc = etc;
		this.regdate = regdate;
		this.themeId = themeId;
		this.themeETC = themeETC;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getTimeETC() {
		return timeETC;
	}

	public void setTimeETC(String timeETC) {
		this.timeETC = timeETC;
	}

	public String getDogsize() {
		return dogsize;
	}

	public void setDogsize(String dogsize) {
		this.dogsize = dogsize;
	}

	public String getDogsizeETC() {
		return dogsizeETC;
	}

	public void setDogsizeETC(String dogsizeETC) {
		this.dogsizeETC = dogsizeETC;
	}

	public String getDogweight() {
		return dogweight;
	}

	public void setDogweight(String dogweight) {
		this.dogweight = dogweight;
	}

	public String getDogweightETC() {
		return dogweightETC;
	}

	public void setDogweightETC(String dogweightETC) {
		this.dogweightETC = dogweightETC;
	}

	public String getPriceMin() {
		return priceMin;
	}

	public void setPriceMin(String priceMin) {
		this.priceMin = priceMin;
	}

	public String getPriceMax() {
		return priceMax;
	}

	public void setPriceMax(String priceMax) {
		this.priceMax = priceMax;
	}

	public String getPriceETC() {
		return priceETC;
	}

	public void setPriceETC(String priceETC) {
		this.priceETC = priceETC;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getEtc() {
		return etc;
	}

	public void setEtc(String etc) {
		this.etc = etc;
	}

	public Date getRegdate() {
		return regdate;
	}

	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}

	public int getThemeId() {
		return themeId;
	}

	public void setThemeId(int themeId) {
		this.themeId = themeId;
	}

	public String getThemeETC() {
		return themeETC;
	}

	public void setThemeETC(String themeETC) {
		this.themeETC = themeETC;
	}
	
	
	
}
