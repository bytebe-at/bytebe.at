CREATE SCHEMA "bytebeat";

CREATE TABLE bytebeat."User"
(
    id integer NOT NULL DEFAULT nextval('bytebeat."User_id_seq"'::regclass),
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character(60) COLLATE pg_catalog."default" NOT NULL,
    subscription character varying(64) COLLATE pg_catalog."default",
    CONSTRAINT "User_pkey" PRIMARY KEY (id),
    CONSTRAINT "User_email_key" UNIQUE (email)
)


CREATE TABLE bytebeat."Song"
(
    id integer NOT NULL DEFAULT nextval('bytebeat."Song_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    file character(32) COLLATE pg_catalog."default" NOT NULL,
    uid character varying(8) COLLATE pg_catalog."default" NOT NULL,
    "authorId" integer NOT NULL,
    CONSTRAINT "Song_pkey" PRIMARY KEY (id),
    CONSTRAINT "Song_authorId_fkey" FOREIGN KEY ("authorId")
        REFERENCES bytebeat."User" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE bytebeat."Profile"
(
    id integer NOT NULL DEFAULT nextval('bytebeat."Profile_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    bio character varying(255) COLLATE pg_catalog."default",
    "authorId" integer NOT NULL,
    CONSTRAINT "Profile_pkey" PRIMARY KEY (id),
    CONSTRAINT "Profile_authorId_fkey" FOREIGN KEY ("authorId")
        REFERENCES bytebeat."User" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE bytebeat."Verification"
(
    id integer NOT NULL DEFAULT nextval('bytebeat.verifications_id_seq'::regclass),
    uuid uuid NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "timestamp" timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT verifications_pkey PRIMARY KEY (id)
)