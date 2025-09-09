CREATE DATABASE iot_db;
\c iot_db;

CREATE TABLE devices (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	type VARCHAR(50) NOT NULL,
	model VARCHAR(100),
	location VARCHAR(100),
	status VARCHAR(20) DEFAULT 'offline',
	api_key VARCHAR(255) UNIQUE NOT NULL,
	last_seen TIMESTAMP,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
)
