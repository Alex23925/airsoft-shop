# Migration `20200924150809-add-accessory`

This migration has been generated by Alex23925 at 9/24/2020, 8:08:09 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Accessory" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"img" text   NOT NULL DEFAULT E'accessory',
"name" text   NOT NULL ,
"price" text   NOT NULL ,
"quantity" text   NOT NULL ,
"effect" text   NOT NULL ,
"multiplier" text   NOT NULL ,
"info" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200924141250-modify-protector..20200924150809-add-accessory
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model MeleeWeapon {
   id         Int      @default(autoincrement()) @id
@@ -33,8 +33,20 @@
   effect    String
   info      String
 }
+model Accessory {
+  id         Int      @default(autoincrement()) @id
+  createdAt  DateTime @default(now())
+  img        String   @default("accessory")
+  name       String
+  price      String
+  quantity   String
+  effect     String
+  multiplier String
+  info       String
+}
+
 model RangeWeapon {
   id         Int      @default(autoincrement()) @id
   createdAt  DateTime @default(now())
   img        String   @default("range")
```


