-- CreateTable
CREATE TABLE "User" (
    "int" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("int")
);

-- CreateTable
CREATE TABLE "UserSetting" (
    "id" SERIAL NOT NULL,
    "notificationOn" BOOLEAN NOT NULL,
    "smsEnable" BOOLEAN NOT NULL,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
