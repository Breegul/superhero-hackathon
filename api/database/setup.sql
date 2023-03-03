DROP TABLE IF EXISTS hero;

CREATE TABLE hero (
    hero_id INT GENERATED ALWAYS AS IDENTITY,
    api_id INT UNIQUE NOT NULL,
    hero_name VARCHAR(50) NOT NULL,
    votes INT DEFAULT 0
);

-- INSERT INTO hero
--     (hero_name, hero_description, votes)
-- VALUES
--     ('Spider-man', 'Friendly neighbourhood hero', 0)