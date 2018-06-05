CREATE FUNCTION user_deactivate
(
    p_userId uuid
)
RETURNS VOID AS
$BODY$
    BEGIN
        UPDATE public.users
        SET "isActive" = CAST(0 AS BIT)
        WHERE "userId" = p_userId;
    END
$BODY$
LANGUAGE 'plpgsql';