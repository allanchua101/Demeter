CREATE FUNCTION user_checkIfEmailUsed
(
	p_email VARCHAR(128)
)
RETURNS BOOLEAN AS
$BODY$
	BEGIN
		RETURN EXISTS (SELECT 1 
					   FROM public.users 
					   WHERE LOWER(email) = LOWER(p_email));
   	END
$BODY$
LANGUAGE 'plpgsql';