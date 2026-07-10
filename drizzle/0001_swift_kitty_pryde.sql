CREATE TABLE "star_readings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"birth_date" varchar(32) NOT NULL,
	"birth_place" text NOT NULL,
	"birth_time" varchar(32),
	"computed_at" timestamp,
	"consent_to_contact" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"email" varchar(255) NOT NULL,
	"house" varchar(32),
	"phone" varchar(64),
	"reading_data" jsonb,
	"status" varchar(50) DEFAULT 'computed' NOT NULL,
	"user_id" uuid
);
--> statement-breakpoint
ALTER TABLE "star_readings" ADD CONSTRAINT "star_readings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;