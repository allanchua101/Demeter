CREATE FUNCTION user_register
(
	 p_userId UUID
	,p_firstName VARCHAR(64)
	,p_lastName VARCHAR(64)
	,p_email VARCHAR(128)
	,p_accessKey VARCHAR(1024)
)
RETURNS VOID AS
$BODY$
	BEGIN
		INSERT INTO users
		(
			 userId
			,firstName
			,lastName
			,email
			,accessKey
		)
		VALUES
		(
			 p_userId
			,p_firstName
			,p_lastName
			,p_email
			,p_accessKey
		);
	END
$BODY$
LANGUAGE 'plpgsql';