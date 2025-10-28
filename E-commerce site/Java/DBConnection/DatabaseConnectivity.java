package com.DBConnection;

import java.sql.*;

public class DatabaseConnectivity {

	
		 public static final String url = "jdbc:mysql://localhost:3306/reactdb"; 
		 public static final String user = "root"; 
		 public static final String password = "CodeX21$"; 

	        static {
				try {
					Class.forName("com.mysql.cj.jdbc.Driver");
				}catch(Exception e) {
					System.out.println(e);
				}
			}
			
			public static Connection getConnection() throws SQLException{
				return DriverManager.getConnection(url,user,password);
		}
	
}
