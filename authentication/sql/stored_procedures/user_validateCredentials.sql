CREATE FUNCTION user_validateCredentials
(
     p_email VARCHAR(128)
    ,p_accessKey VARCHAR(1024)
)
RETURNS BOOLEAN AS
$BODY$
	BEGIN
		RETURN EXISTS (SELECT 1 
					   FROM public.users 
					   WHERE LOWER(email) = LOWER(p_email)
                        AND accessKey = p_accessKey);
   	END
$BODY$
LANGUAGE 'plpgsql';