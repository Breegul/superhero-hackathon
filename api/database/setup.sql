DROP TABLE IF EXISTS hero;

CREATE TABLE hero (
    hero_id INT GENERATED ALWAYS AS IDENTITY,
    hero_name VARCHAR(30) UNIQUE NOT NULL,
    hero_description VARCHAR(500),
    votes INT DEFAULT 0
);

INSERT INTO hero
    (hero_name, hero_description, votes)
VALUES
    ('Spider-man', 'Friendly neighbourhood hero', 0)