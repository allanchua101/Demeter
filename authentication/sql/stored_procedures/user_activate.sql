CREATE FUNCTION user_activate
(
    p_userId uuid
)
RETURNS VOID AS
$BODY$
    BEGIN
        UPDATE public.users
        SET "isActive" = CAST(1 AS BIT)
        WHERE "userId" = p_userId;
    END
$BODY$
LANGUAGE 'plpgsql';