package com.skilldistillery.caffeine.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Drink {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private double caffeine;
	
	private double size;
	
	@Column(name="image_url")
	private String imageUrl;

	public Drink() {
		super();
	}

	public Drink(int id, String name, double caffeine, double size, String imageUrl) {
		super();
		this.id = id;
		this.name = name;
		this.caffeine = caffeine;
		this.size = size;
		this.imageUrl = imageUrl;
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

	public double getCaffeine() {
		return caffeine;
	}

	public void setCaffeine(double caffeine) {
		this.caffeine = caffeine;
	}

	public double getSize() {
		return size;
	}

	public void setSize(double size) {
		this.size = size;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Drink other = (Drink) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Drink [id=" + id + ", name=" + name + ", caffeine=" + caffeine + ", size=" + size + ", imageUrl="
				+ imageUrl + "]";
	}
	
}
