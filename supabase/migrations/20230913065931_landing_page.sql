create sequence "public"."checklist_id_seq";

create sequence "public"."directus_activity_id_seq";

create sequence "public"."directus_fields_id_seq";

create sequence "public"."directus_notifications_id_seq";

create sequence "public"."directus_permissions_id_seq";

create sequence "public"."directus_presets_id_seq";

create sequence "public"."directus_relations_id_seq";

create sequence "public"."directus_revisions_id_seq";

create sequence "public"."directus_settings_id_seq";

create sequence "public"."directus_webhooks_id_seq";

create sequence "public"."landingPage_id_seq";

create sequence "public"."organization_id_seq";

create table "public"."checklist" (
    "id" integer not null default nextval('checklist_id_seq'::regclass),
    "status" character varying(255) not null default 'draft'::character varying,
    "user_created" uuid,
    "date_created" timestamp with time zone,
    "user_updated" uuid,
    "date_updated" timestamp with time zone,
    "name" character varying(255),
    "organization" integer
);


create table "public"."directus_activity" (
    "id" integer not null default nextval('directus_activity_id_seq'::regclass),
    "action" character varying(45) not null,
    "user" uuid,
    "timestamp" timestamp with time zone not null default CURRENT_TIMESTAMP,
    "ip" character varying(50),
    "user_agent" character varying(255),
    "collection" character varying(64) not null,
    "item" character varying(255) not null,
    "comment" text,
    "origin" character varying(255)
);


create table "public"."directus_collections" (
    "collection" character varying(64) not null,
    "icon" character varying(30),
    "note" text,
    "display_template" character varying(255),
    "hidden" boolean not null default false,
    "singleton" boolean not null default false,
    "translations" json,
    "archive_field" character varying(64),
    "archive_app_filter" boolean not null default true,
    "archive_value" character varying(255),
    "unarchive_value" character varying(255),
    "sort_field" character varying(64),
    "accountability" character varying(255) default 'all'::character varying,
    "color" character varying(255),
    "item_duplication_fields" json,
    "sort" integer,
    "group" character varying(64),
    "collapse" character varying(255) not null default 'open'::character varying,
    "preview_url" character varying(255)
);


create table "public"."directus_dashboards" (
    "id" uuid not null,
    "name" character varying(255) not null,
    "icon" character varying(30) not null default 'dashboard'::character varying,
    "note" text,
    "date_created" timestamp with time zone default CURRENT_TIMESTAMP,
    "user_created" uuid,
    "color" character varying(255)
);


create table "public"."directus_fields" (
    "id" integer not null default nextval('directus_fields_id_seq'::regclass),
    "collection" character varying(64) not null,
    "field" character varying(64) not null,
    "special" character varying(64),
    "interface" character varying(64),
    "options" json,
    "display" character varying(64),
    "display_options" json,
    "readonly" boolean not null default false,
    "hidden" boolean not null default false,
    "sort" integer,
    "width" character varying(30) default 'full'::character varying,
    "translations" json,
    "note" text,
    "conditions" json,
    "required" boolean default false,
    "group" character varying(64),
    "validation" json,
    "validation_message" text
);


create table "public"."directus_files" (
    "id" uuid not null,
    "storage" character varying(255) not null,
    "filename_disk" character varying(255),
    "filename_download" character varying(255) not null,
    "title" character varying(255),
    "type" character varying(255),
    "folder" uuid,
    "uploaded_by" uuid,
    "uploaded_on" timestamp with time zone not null default CURRENT_TIMESTAMP,
    "modified_by" uuid,
    "modified_on" timestamp with time zone not null default CURRENT_TIMESTAMP,
    "charset" character varying(50),
    "filesize" bigint,
    "width" integer,
    "height" integer,
    "duration" integer,
    "embed" character varying(200),
    "description" text,
    "location" text,
    "tags" text,
    "metadata" json,
    "organization" integer
);


create table "public"."directus_flows" (
    "id" uuid not null,
    "name" character varying(255) not null,
    "icon" character varying(30),
    "color" character varying(255),
    "description" text,
    "status" character varying(255) not null default 'active'::character varying,
    "trigger" character varying(255),
    "accountability" character varying(255) default 'all'::character varying,
    "options" json,
    "operation" uuid,
    "date_created" timestamp with time zone default CURRENT_TIMESTAMP,
    "user_created" uuid
);


create table "public"."directus_folders" (
    "id" uuid not null,
    "name" character varying(255) not null,
    "parent" uuid
);


create table "public"."directus_migrations" (
    "version" character varying(255) not null,
    "name" character varying(255) not null,
    "timestamp" timestamp with time zone default CURRENT_TIMESTAMP
);


create table "public"."directus_notifications" (
    "id" integer not null default nextval('directus_notifications_id_seq'::regclass),
    "timestamp" timestamp with time zone default CURRENT_TIMESTAMP,
    "status" character varying(255) default 'inbox'::character varying,
    "recipient" uuid not null,
    "sender" uuid,
    "subject" character varying(255) not null,
    "message" text,
    "collection" character varying(64),
    "item" character varying(255)
);


create table "public"."directus_operations" (
    "id" uuid not null,
    "name" character varying(255),
    "key" character varying(255) not null,
    "type" character varying(255) not null,
    "position_x" integer not null,
    "position_y" integer not null,
    "options" json,
    "resolve" uuid,
    "reject" uuid,
    "flow" uuid not null,
    "date_created" timestamp with time zone default CURRENT_TIMESTAMP,
    "user_created" uuid
);


create table "public"."directus_panels" (
    "id" uuid not null,
    "dashboard" uuid not null,
    "name" character varying(255),
    "icon" character varying(30) default NULL::character varying,
    "color" character varying(10),
    "show_header" boolean not null default false,
    "note" text,
    "type" character varying(255) not null,
    "position_x" integer not null,
    "position_y" integer not null,
    "width" integer not null,
    "height" integer not null,
    "options" json,
    "date_created" timestamp with time zone default CURRENT_TIMESTAMP,
    "user_created" uuid
);


create table "public"."directus_permissions" (
    "id" integer not null default nextval('directus_permissions_id_seq'::regclass),
    "role" uuid,
    "collection" character varying(64) not null,
    "action" character varying(10) not null,
    "permissions" json,
    "validation" json,
    "presets" json,
    "fields" text
);


create table "public"."directus_presets" (
    "id" integer not null default nextval('directus_presets_id_seq'::regclass),
    "bookmark" character varying(255),
    "user" uuid,
    "role" uuid,
    "collection" character varying(64),
    "search" character varying(100),
    "layout" character varying(100) default 'tabular'::character varying,
    "layout_query" json,
    "layout_options" json,
    "refresh_interval" integer,
    "filter" json,
    "icon" character varying(30) default 'bookmark'::character varying,
    "color" character varying(255)
);


create table "public"."directus_relations" (
    "id" integer not null default nextval('directus_relations_id_seq'::regclass),
    "many_collection" character varying(64) not null,
    "many_field" character varying(64) not null,
    "one_collection" character varying(64),
    "one_field" character varying(64),
    "one_collection_field" character varying(64),
    "one_allowed_collections" text,
    "junction_field" character varying(64),
    "sort_field" character varying(64),
    "one_deselect_action" character varying(255) not null default 'nullify'::character varying
);


create table "public"."directus_revisions" (
    "id" integer not null default nextval('directus_revisions_id_seq'::regclass),
    "activity" integer not null,
    "collection" character varying(64) not null,
    "item" character varying(255) not null,
    "data" json,
    "delta" json,
    "parent" integer
);


create table "public"."directus_roles" (
    "id" uuid not null,
    "name" character varying(100) not null,
    "icon" character varying(30) not null default 'supervised_user_circle'::character varying,
    "description" text,
    "ip_access" text,
    "enforce_tfa" boolean not null default false,
    "admin_access" boolean not null default false,
    "app_access" boolean not null default true
);


create table "public"."directus_sessions" (
    "token" character varying(64) not null,
    "user" uuid,
    "expires" timestamp with time zone not null,
    "ip" character varying(255),
    "user_agent" character varying(255),
    "share" uuid,
    "origin" character varying(255)
);


create table "public"."directus_settings" (
    "id" integer not null default nextval('directus_settings_id_seq'::regclass),
    "project_name" character varying(100) not null default 'Directus'::character varying,
    "project_url" character varying(255),
    "project_color" character varying(50) default NULL::character varying,
    "project_logo" uuid,
    "public_foreground" uuid,
    "public_background" uuid,
    "public_note" text,
    "auth_login_attempts" integer default 25,
    "auth_password_policy" character varying(100),
    "storage_asset_transform" character varying(7) default 'all'::character varying,
    "storage_asset_presets" json,
    "custom_css" text,
    "storage_default_folder" uuid,
    "basemaps" json,
    "mapbox_key" character varying(255),
    "module_bar" json,
    "project_descriptor" character varying(100),
    "default_language" character varying(255) not null default 'en-US'::character varying,
    "custom_aspect_ratios" json
);


create table "public"."directus_shares" (
    "id" uuid not null,
    "name" character varying(255),
    "collection" character varying(64) not null,
    "item" character varying(255) not null,
    "role" uuid,
    "password" character varying(255),
    "user_created" uuid,
    "date_created" timestamp with time zone default CURRENT_TIMESTAMP,
    "date_start" timestamp with time zone,
    "date_end" timestamp with time zone,
    "times_used" integer default 0,
    "max_uses" integer
);


create table "public"."directus_translations" (
    "id" uuid not null,
    "language" character varying(255) not null,
    "key" character varying(255) not null,
    "value" text not null
);


create table "public"."directus_users" (
    "id" uuid not null,
    "first_name" character varying(50),
    "last_name" character varying(50),
    "email" character varying(128),
    "password" character varying(255),
    "location" character varying(255),
    "title" character varying(50),
    "description" text,
    "tags" json,
    "avatar" uuid,
    "language" character varying(255) default NULL::character varying,
    "theme" character varying(20) default 'auto'::character varying,
    "tfa_secret" character varying(255),
    "status" character varying(16) not null default 'active'::character varying,
    "role" uuid,
    "token" character varying(255),
    "last_access" timestamp with time zone,
    "last_page" character varying(255),
    "provider" character varying(128) not null default 'default'::character varying,
    "external_identifier" character varying(255),
    "auth_data" json,
    "email_notifications" boolean default true,
    "org_id" integer
);


create table "public"."directus_webhooks" (
    "id" integer not null default nextval('directus_webhooks_id_seq'::regclass),
    "name" character varying(255) not null,
    "method" character varying(10) not null default 'POST'::character varying,
    "url" character varying(255) not null,
    "status" character varying(10) not null default 'active'::character varying,
    "data" boolean not null default true,
    "actions" character varying(100) not null,
    "collections" character varying(255) not null,
    "headers" json
);


create table "public"."landingPage" (
    "id" integer not null default nextval('"landingPage_id_seq"'::regclass),
    "status" character varying(255) not null default 'draft'::character varying,
    "user_created" uuid,
    "date_created" timestamp with time zone,
    "user_updated" uuid,
    "date_updated" timestamp with time zone,
    "Title" character varying(255),
    "org_image" uuid,
    "servicesProvided" json,
    "organization" integer,
    "page_content" text
);


create table "public"."organization" (
    "id" integer not null default nextval('organization_id_seq'::regclass),
    "status" character varying(255) not null default 'draft'::character varying,
    "user_created" uuid,
    "date_created" timestamp with time zone,
    "user_updated" uuid,
    "date_updated" timestamp with time zone,
    "name" character varying(255),
    "shortName" character varying(255)
);


alter sequence "public"."checklist_id_seq" owned by "public"."checklist"."id";

alter sequence "public"."directus_activity_id_seq" owned by "public"."directus_activity"."id";

alter sequence "public"."directus_fields_id_seq" owned by "public"."directus_fields"."id";

alter sequence "public"."directus_notifications_id_seq" owned by "public"."directus_notifications"."id";

alter sequence "public"."directus_permissions_id_seq" owned by "public"."directus_permissions"."id";

alter sequence "public"."directus_presets_id_seq" owned by "public"."directus_presets"."id";

alter sequence "public"."directus_relations_id_seq" owned by "public"."directus_relations"."id";

alter sequence "public"."directus_revisions_id_seq" owned by "public"."directus_revisions"."id";

alter sequence "public"."directus_settings_id_seq" owned by "public"."directus_settings"."id";

alter sequence "public"."directus_webhooks_id_seq" owned by "public"."directus_webhooks"."id";

alter sequence "public"."landingPage_id_seq" owned by "public"."landingPage"."id";

alter sequence "public"."organization_id_seq" owned by "public"."organization"."id";

CREATE UNIQUE INDEX checklist_pkey ON public.checklist USING btree (id);

CREATE UNIQUE INDEX directus_activity_pkey ON public.directus_activity USING btree (id);

CREATE UNIQUE INDEX directus_collections_pkey ON public.directus_collections USING btree (collection);

CREATE UNIQUE INDEX directus_dashboards_pkey ON public.directus_dashboards USING btree (id);

CREATE UNIQUE INDEX directus_fields_pkey ON public.directus_fields USING btree (id);

CREATE UNIQUE INDEX directus_files_pkey ON public.directus_files USING btree (id);

CREATE UNIQUE INDEX directus_flows_operation_unique ON public.directus_flows USING btree (operation);

CREATE UNIQUE INDEX directus_flows_pkey ON public.directus_flows USING btree (id);

CREATE UNIQUE INDEX directus_folders_pkey ON public.directus_folders USING btree (id);

CREATE UNIQUE INDEX directus_migrations_pkey ON public.directus_migrations USING btree (version);

CREATE UNIQUE INDEX directus_notifications_pkey ON public.directus_notifications USING btree (id);

CREATE UNIQUE INDEX directus_operations_pkey ON public.directus_operations USING btree (id);

CREATE UNIQUE INDEX directus_operations_reject_unique ON public.directus_operations USING btree (reject);

CREATE UNIQUE INDEX directus_operations_resolve_unique ON public.directus_operations USING btree (resolve);

CREATE UNIQUE INDEX directus_panels_pkey ON public.directus_panels USING btree (id);

CREATE UNIQUE INDEX directus_permissions_pkey ON public.directus_permissions USING btree (id);

CREATE UNIQUE INDEX directus_presets_pkey ON public.directus_presets USING btree (id);

CREATE UNIQUE INDEX directus_relations_pkey ON public.directus_relations USING btree (id);

CREATE UNIQUE INDEX directus_revisions_pkey ON public.directus_revisions USING btree (id);

CREATE UNIQUE INDEX directus_roles_pkey ON public.directus_roles USING btree (id);

CREATE UNIQUE INDEX directus_sessions_pkey ON public.directus_sessions USING btree (token);

CREATE UNIQUE INDEX directus_settings_pkey ON public.directus_settings USING btree (id);

CREATE UNIQUE INDEX directus_shares_pkey ON public.directus_shares USING btree (id);

CREATE UNIQUE INDEX directus_translations_pkey ON public.directus_translations USING btree (id);

CREATE UNIQUE INDEX directus_users_email_unique ON public.directus_users USING btree (email);

CREATE UNIQUE INDEX directus_users_external_identifier_unique ON public.directus_users USING btree (external_identifier);

CREATE UNIQUE INDEX directus_users_pkey ON public.directus_users USING btree (id);

CREATE UNIQUE INDEX directus_users_token_unique ON public.directus_users USING btree (token);

CREATE UNIQUE INDEX directus_webhooks_pkey ON public.directus_webhooks USING btree (id);

CREATE UNIQUE INDEX "landingPage_pkey" ON public."landingPage" USING btree (id);

CREATE UNIQUE INDEX organization_pkey ON public.organization USING btree (id);

alter table "public"."checklist" add constraint "checklist_pkey" PRIMARY KEY using index "checklist_pkey";

alter table "public"."directus_activity" add constraint "directus_activity_pkey" PRIMARY KEY using index "directus_activity_pkey";

alter table "public"."directus_collections" add constraint "directus_collections_pkey" PRIMARY KEY using index "directus_collections_pkey";

alter table "public"."directus_dashboards" add constraint "directus_dashboards_pkey" PRIMARY KEY using index "directus_dashboards_pkey";

alter table "public"."directus_fields" add constraint "directus_fields_pkey" PRIMARY KEY using index "directus_fields_pkey";

alter table "public"."directus_files" add constraint "directus_files_pkey" PRIMARY KEY using index "directus_files_pkey";

alter table "public"."directus_flows" add constraint "directus_flows_pkey" PRIMARY KEY using index "directus_flows_pkey";

alter table "public"."directus_folders" add constraint "directus_folders_pkey" PRIMARY KEY using index "directus_folders_pkey";

alter table "public"."directus_migrations" add constraint "directus_migrations_pkey" PRIMARY KEY using index "directus_migrations_pkey";

alter table "public"."directus_notifications" add constraint "directus_notifications_pkey" PRIMARY KEY using index "directus_notifications_pkey";

alter table "public"."directus_operations" add constraint "directus_operations_pkey" PRIMARY KEY using index "directus_operations_pkey";

alter table "public"."directus_panels" add constraint "directus_panels_pkey" PRIMARY KEY using index "directus_panels_pkey";

alter table "public"."directus_permissions" add constraint "directus_permissions_pkey" PRIMARY KEY using index "directus_permissions_pkey";

alter table "public"."directus_presets" add constraint "directus_presets_pkey" PRIMARY KEY using index "directus_presets_pkey";

alter table "public"."directus_relations" add constraint "directus_relations_pkey" PRIMARY KEY using index "directus_relations_pkey";

alter table "public"."directus_revisions" add constraint "directus_revisions_pkey" PRIMARY KEY using index "directus_revisions_pkey";

alter table "public"."directus_roles" add constraint "directus_roles_pkey" PRIMARY KEY using index "directus_roles_pkey";

alter table "public"."directus_sessions" add constraint "directus_sessions_pkey" PRIMARY KEY using index "directus_sessions_pkey";

alter table "public"."directus_settings" add constraint "directus_settings_pkey" PRIMARY KEY using index "directus_settings_pkey";

alter table "public"."directus_shares" add constraint "directus_shares_pkey" PRIMARY KEY using index "directus_shares_pkey";

alter table "public"."directus_translations" add constraint "directus_translations_pkey" PRIMARY KEY using index "directus_translations_pkey";

alter table "public"."directus_users" add constraint "directus_users_pkey" PRIMARY KEY using index "directus_users_pkey";

alter table "public"."directus_webhooks" add constraint "directus_webhooks_pkey" PRIMARY KEY using index "directus_webhooks_pkey";

alter table "public"."landingPage" add constraint "landingPage_pkey" PRIMARY KEY using index "landingPage_pkey";

alter table "public"."organization" add constraint "organization_pkey" PRIMARY KEY using index "organization_pkey";

alter table "public"."checklist" add constraint "checklist_organization_foreign" FOREIGN KEY (organization) REFERENCES organization(id) ON DELETE SET NULL not valid;

alter table "public"."checklist" validate constraint "checklist_organization_foreign";

alter table "public"."checklist" add constraint "checklist_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) not valid;

alter table "public"."checklist" validate constraint "checklist_user_created_foreign";

alter table "public"."checklist" add constraint "checklist_user_updated_foreign" FOREIGN KEY (user_updated) REFERENCES directus_users(id) not valid;

alter table "public"."checklist" validate constraint "checklist_user_updated_foreign";

alter table "public"."directus_collections" add constraint "directus_collections_group_foreign" FOREIGN KEY ("group") REFERENCES directus_collections(collection) not valid;

alter table "public"."directus_collections" validate constraint "directus_collections_group_foreign";

alter table "public"."directus_dashboards" add constraint "directus_dashboards_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) ON DELETE SET NULL not valid;

alter table "public"."directus_dashboards" validate constraint "directus_dashboards_user_created_foreign";

alter table "public"."directus_files" add constraint "directus_files_folder_foreign" FOREIGN KEY (folder) REFERENCES directus_folders(id) ON DELETE SET NULL not valid;

alter table "public"."directus_files" validate constraint "directus_files_folder_foreign";

alter table "public"."directus_files" add constraint "directus_files_modified_by_foreign" FOREIGN KEY (modified_by) REFERENCES directus_users(id) not valid;

alter table "public"."directus_files" validate constraint "directus_files_modified_by_foreign";

alter table "public"."directus_files" add constraint "directus_files_organization_foreign" FOREIGN KEY (organization) REFERENCES organization(id) ON DELETE SET NULL not valid;

alter table "public"."directus_files" validate constraint "directus_files_organization_foreign";

alter table "public"."directus_files" add constraint "directus_files_uploaded_by_foreign" FOREIGN KEY (uploaded_by) REFERENCES directus_users(id) not valid;

alter table "public"."directus_files" validate constraint "directus_files_uploaded_by_foreign";

alter table "public"."directus_flows" add constraint "directus_flows_operation_unique" UNIQUE using index "directus_flows_operation_unique";

alter table "public"."directus_flows" add constraint "directus_flows_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) ON DELETE SET NULL not valid;

alter table "public"."directus_flows" validate constraint "directus_flows_user_created_foreign";

alter table "public"."directus_folders" add constraint "directus_folders_parent_foreign" FOREIGN KEY (parent) REFERENCES directus_folders(id) not valid;

alter table "public"."directus_folders" validate constraint "directus_folders_parent_foreign";

alter table "public"."directus_notifications" add constraint "directus_notifications_recipient_foreign" FOREIGN KEY (recipient) REFERENCES directus_users(id) ON DELETE CASCADE not valid;

alter table "public"."directus_notifications" validate constraint "directus_notifications_recipient_foreign";

alter table "public"."directus_notifications" add constraint "directus_notifications_sender_foreign" FOREIGN KEY (sender) REFERENCES directus_users(id) not valid;

alter table "public"."directus_notifications" validate constraint "directus_notifications_sender_foreign";

alter table "public"."directus_operations" add constraint "directus_operations_flow_foreign" FOREIGN KEY (flow) REFERENCES directus_flows(id) ON DELETE CASCADE not valid;

alter table "public"."directus_operations" validate constraint "directus_operations_flow_foreign";

alter table "public"."directus_operations" add constraint "directus_operations_reject_foreign" FOREIGN KEY (reject) REFERENCES directus_operations(id) not valid;

alter table "public"."directus_operations" validate constraint "directus_operations_reject_foreign";

alter table "public"."directus_operations" add constraint "directus_operations_reject_unique" UNIQUE using index "directus_operations_reject_unique";

alter table "public"."directus_operations" add constraint "directus_operations_resolve_foreign" FOREIGN KEY (resolve) REFERENCES directus_operations(id) not valid;

alter table "public"."directus_operations" validate constraint "directus_operations_resolve_foreign";

alter table "public"."directus_operations" add constraint "directus_operations_resolve_unique" UNIQUE using index "directus_operations_resolve_unique";

alter table "public"."directus_operations" add constraint "directus_operations_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) ON DELETE SET NULL not valid;

alter table "public"."directus_operations" validate constraint "directus_operations_user_created_foreign";

alter table "public"."directus_panels" add constraint "directus_panels_dashboard_foreign" FOREIGN KEY (dashboard) REFERENCES directus_dashboards(id) ON DELETE CASCADE not valid;

alter table "public"."directus_panels" validate constraint "directus_panels_dashboard_foreign";

alter table "public"."directus_panels" add constraint "directus_panels_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) ON DELETE SET NULL not valid;

alter table "public"."directus_panels" validate constraint "directus_panels_user_created_foreign";

alter table "public"."directus_permissions" add constraint "directus_permissions_role_foreign" FOREIGN KEY (role) REFERENCES directus_roles(id) ON DELETE CASCADE not valid;

alter table "public"."directus_permissions" validate constraint "directus_permissions_role_foreign";

alter table "public"."directus_presets" add constraint "directus_presets_role_foreign" FOREIGN KEY (role) REFERENCES directus_roles(id) ON DELETE CASCADE not valid;

alter table "public"."directus_presets" validate constraint "directus_presets_role_foreign";

alter table "public"."directus_presets" add constraint "directus_presets_user_foreign" FOREIGN KEY ("user") REFERENCES directus_users(id) ON DELETE CASCADE not valid;

alter table "public"."directus_presets" validate constraint "directus_presets_user_foreign";

alter table "public"."directus_revisions" add constraint "directus_revisions_activity_foreign" FOREIGN KEY (activity) REFERENCES directus_activity(id) ON DELETE CASCADE not valid;

alter table "public"."directus_revisions" validate constraint "directus_revisions_activity_foreign";

alter table "public"."directus_revisions" add constraint "directus_revisions_parent_foreign" FOREIGN KEY (parent) REFERENCES directus_revisions(id) not valid;

alter table "public"."directus_revisions" validate constraint "directus_revisions_parent_foreign";

alter table "public"."directus_sessions" add constraint "directus_sessions_share_foreign" FOREIGN KEY (share) REFERENCES directus_shares(id) ON DELETE CASCADE not valid;

alter table "public"."directus_sessions" validate constraint "directus_sessions_share_foreign";

alter table "public"."directus_sessions" add constraint "directus_sessions_user_foreign" FOREIGN KEY ("user") REFERENCES directus_users(id) ON DELETE CASCADE not valid;

alter table "public"."directus_sessions" validate constraint "directus_sessions_user_foreign";

alter table "public"."directus_settings" add constraint "directus_settings_project_logo_foreign" FOREIGN KEY (project_logo) REFERENCES directus_files(id) not valid;

alter table "public"."directus_settings" validate constraint "directus_settings_project_logo_foreign";

alter table "public"."directus_settings" add constraint "directus_settings_public_background_foreign" FOREIGN KEY (public_background) REFERENCES directus_files(id) not valid;

alter table "public"."directus_settings" validate constraint "directus_settings_public_background_foreign";

alter table "public"."directus_settings" add constraint "directus_settings_public_foreground_foreign" FOREIGN KEY (public_foreground) REFERENCES directus_files(id) not valid;

alter table "public"."directus_settings" validate constraint "directus_settings_public_foreground_foreign";

alter table "public"."directus_settings" add constraint "directus_settings_storage_default_folder_foreign" FOREIGN KEY (storage_default_folder) REFERENCES directus_folders(id) ON DELETE SET NULL not valid;

alter table "public"."directus_settings" validate constraint "directus_settings_storage_default_folder_foreign";

alter table "public"."directus_shares" add constraint "directus_shares_collection_foreign" FOREIGN KEY (collection) REFERENCES directus_collections(collection) ON DELETE CASCADE not valid;

alter table "public"."directus_shares" validate constraint "directus_shares_collection_foreign";

alter table "public"."directus_shares" add constraint "directus_shares_role_foreign" FOREIGN KEY (role) REFERENCES directus_roles(id) ON DELETE CASCADE not valid;

alter table "public"."directus_shares" validate constraint "directus_shares_role_foreign";

alter table "public"."directus_shares" add constraint "directus_shares_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) ON DELETE SET NULL not valid;

alter table "public"."directus_shares" validate constraint "directus_shares_user_created_foreign";

alter table "public"."directus_users" add constraint "directus_users_email_unique" UNIQUE using index "directus_users_email_unique";

alter table "public"."directus_users" add constraint "directus_users_external_identifier_unique" UNIQUE using index "directus_users_external_identifier_unique";

alter table "public"."directus_users" add constraint "directus_users_org_id_foreign" FOREIGN KEY (org_id) REFERENCES organization(id) ON DELETE SET NULL not valid;

alter table "public"."directus_users" validate constraint "directus_users_org_id_foreign";

alter table "public"."directus_users" add constraint "directus_users_role_foreign" FOREIGN KEY (role) REFERENCES directus_roles(id) ON DELETE SET NULL not valid;

alter table "public"."directus_users" validate constraint "directus_users_role_foreign";

alter table "public"."directus_users" add constraint "directus_users_token_unique" UNIQUE using index "directus_users_token_unique";

alter table "public"."landingPage" add constraint "landingpage_org_image_foreign" FOREIGN KEY (org_image) REFERENCES directus_files(id) ON DELETE SET NULL not valid;

alter table "public"."landingPage" validate constraint "landingpage_org_image_foreign";

alter table "public"."landingPage" add constraint "landingpage_organization_foreign" FOREIGN KEY (organization) REFERENCES organization(id) ON DELETE SET NULL not valid;

alter table "public"."landingPage" validate constraint "landingpage_organization_foreign";

alter table "public"."landingPage" add constraint "landingpage_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) not valid;

alter table "public"."landingPage" validate constraint "landingpage_user_created_foreign";

alter table "public"."landingPage" add constraint "landingpage_user_updated_foreign" FOREIGN KEY (user_updated) REFERENCES directus_users(id) not valid;

alter table "public"."landingPage" validate constraint "landingpage_user_updated_foreign";

alter table "public"."organization" add constraint "organization_user_created_foreign" FOREIGN KEY (user_created) REFERENCES directus_users(id) not valid;

alter table "public"."organization" validate constraint "organization_user_created_foreign";

alter table "public"."organization" add constraint "organization_user_updated_foreign" FOREIGN KEY (user_updated) REFERENCES directus_users(id) not valid;

alter table "public"."organization" validate constraint "organization_user_updated_foreign";


