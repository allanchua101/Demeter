CREATE FUNCTION user_getList() 
RETURNS TABLE (
    userId uuid,
    firstName character varying(64),
    lastName character varying(64),
    email character varying(128),
    accessKey character varying(1024),
    isActive bit
) AS $$
	BEGIN
		RETURN QUERY 
		SELECT   u."userId"
				,u."firstName"
				,u."lastName"
				,u."email"
				,u."accessKey"
				,u."isActive"
	FROM public.users AS u;
   	END
$$
LANGUAGE 'plpgsql';