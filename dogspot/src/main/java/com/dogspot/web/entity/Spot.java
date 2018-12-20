package com.dogspot.web.entity;

import java.util.Date;

public class Spot {
	private int id;
	private String name;
	private String addr;
	private String phone;
	private String time;
	private String time_etc;
	private String dogsize;
	private String dogsize_etc;
	private String dogweight;
	private String dogweight_etc;
	private String price_min;
	private String price_max;
	private String price_etc;
	private String url;
	private String etc;
	private Date regDate;
	private int themeid;
	private String theme_etc;
	
	public Spot(int id, String name, String addr, String phone, String time, String time_etc, String dogsize,
			String dogsize_etc, String dogweight, String dogweight_etc, String price_min, String price_max,
			String price_etc, String url, String etc, Date regDate, int themeid, String theme_etc) {
	
		this.id = id;
		this.name = name;
		this.addr = addr;
		this.phone = phone;
		this.time = time;
		this.time_etc = time_etc;
		this.dogsize = dogsize;
		this.dogsize_etc = dogsize_etc;
		this.dogweight = dogweight;
		this.dogweight_etc = dogweight_etc;
		this.price_min = price_min;
		this.price_max = price_max;
		this.price_etc = price_etc;
		this.url = url;
		this.etc = etc;
		this.regDate = regDate;
		this.themeid = themeid;
		this.theme_etc = theme_etc;
	}
	
	 public Spot(int id, String name) {
	      
	      this.id = id;
	      this.name = name;
	   }

	   public Spot(int id, String name, String addr) {
	
	      this.id = id;
	      this.name = name;
	      this.addr = addr;
	   }
	
	public Spot(String name, String addr, int themeid) {
	
		this.name = name;
		this.addr = addr;
		this.themeid = themeid;
	}
	
	public Spot(String name, String addr, int themeid, String phone) {
		
		this.name = name;
		this.addr = addr;
		this.themeid = themeid;
		this.phone = phone;
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


	public String getTime_etc() {
		return time_etc;
	}


	public void setTime_etc(String time_etc) {
		this.time_etc = time_etc;
	}


	public String getDogsize() {
		return dogsize;
	}


	public void setDogsize(String dogsize) {
		this.dogsize = dogsize;
	}


	public String getDogsize_etc() {
		return dogsize_etc;
	}


	public void setDogsize_etc(String dogsize_etc) {
		this.dogsize_etc = dogsize_etc;
	}


	public String getDogweight() {
		return dogweight;
	}


	public void setDogweight(String dogweight) {
		this.dogweight = dogweight;
	}


	public String getDogweight_etc() {
		return dogweight_etc;
	}


	public void setDogweight_etc(String dogweight_etc) {
		this.dogweight_etc = dogweight_etc;
	}


	public String getPrice_min() {
		return price_min;
	}


	public void setPrice_min(String price_min) {
		this.price_min = price_min;
	}


	public String getPrice_max() {
		return price_max;
	}


	public void setPrice_max(String price_max) {
		this.price_max = price_max;
	}


	public String getPrice_etc() {
		return price_etc;
	}


	public void setPrice_etc(String price_etc) {
		this.price_etc = price_etc;
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


	public Date getRegDate() {
		return regDate;
	}


	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}


	public int getThemeid() {
		return themeid;
	}


	public void setThemeid(int themeid) {
		this.themeid = themeid;
	}


	public String getTheme_etc() {
		return theme_etc;
	}


	public void setTheme_etc(String theme_etc) {
		this.theme_etc = theme_etc;
	}


	@Override
	public String toString() {
		return "Spot [id=" + id + ", name=" + name + ", addr=" + addr + ", phone=" + phone + ", time=" + time
				+ ", time_etc=" + time_etc + ", dogsize=" + dogsize + ", dogsize_etc=" + dogsize_etc + ", dogweight="
				+ dogweight + ", dogweight_etc=" + dogweight_etc + ", price_min=" + price_min + ", price_max="
				+ price_max + ", price_etc=" + price_etc + ", url=" + url + ", etc=" + etc + ", regDate=" + regDate
				+ ", themeid=" + themeid + ", theme_etc=" + theme_etc + "]";
	}
	

}
