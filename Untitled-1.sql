-- Table: public.mesas

-- DROP TABLE IF EXISTS public.mesas;

CREATE TABLE IF NOT EXISTS public.mesas
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    nome text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT mesas_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.mesas
    OWNER to rritulzmldxllx;


-- Table: public.personagens

-- DROP TABLE IF EXISTS public.personagens;

CREATE TABLE IF NOT EXISTS public.personagens
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    nome text COLLATE pg_catalog."default",
    ponto_vida_total integer,
    ponto_vida_atual integer,
    forca integer,
    destreza integer,
    constituicao integer,
    inteligencia integer,
    sabedoria integer,
    carisma integer,
    descricao text COLLATE pg_catalog."default",
    CONSTRAINT personagens_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.personagens
    OWNER to rritulzmldxllx;


-- Table: public.mesas_personagens

-- DROP TABLE IF EXISTS public.mesas_personagens;

CREATE TABLE IF NOT EXISTS public.mesas_personagens
(
    id_mesa integer NOT NULL,
    id_personagem integer NOT NULL,
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT mesa_personagem_pkey PRIMARY KEY (id),
    CONSTRAINT fk_id_mesa FOREIGN KEY (id_mesa)
        REFERENCES public.mesas (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_id_personagem FOREIGN KEY (id_personagem)
        REFERENCES public.personagens (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.mesas_personagens
    OWNER to rritulzmldxllx;


-- View: public.lista_personagens

-- DROP VIEW public.lista_personagens;

CREATE OR REPLACE VIEW public.lista_personagens
 AS
 SELECT mesas_personagens.id_mesa,
    mesas_personagens.id_personagem,
    personagens.nome,
    personagens.ponto_vida_total,
    personagens.ponto_vida_atual,
    personagens.forca,
    personagens.destreza,
    personagens.constituicao,
    personagens.inteligencia,
    personagens.sabedoria,
    personagens.carisma,
    personagens.descricao
   FROM mesas_personagens
     JOIN mesas ON mesas.id = mesas_personagens.id_mesa
     JOIN personagens ON personagens.id = mesas_personagens.id_personagem;

ALTER TABLE public.lista_personagens
    OWNER TO rritulzmldxllx;

