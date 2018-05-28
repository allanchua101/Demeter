CREATE TABLE public.users
(
    "userId" uuid NOT NULL,
    "firstName" character varying(64) COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying(64) COLLATE pg_catalog."default" NOT NULL,
    "email" character varying(128) COLLATE pg_catalog."default" NOT NULL,
    "accessKey" character varying(1024) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY ("userId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;