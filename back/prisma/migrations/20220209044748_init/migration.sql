/*
  Warnings:

  - Added the required column `commentId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectCltId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectDevId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Enum_IssueType" AS ENUM ('MissingTask', 'Bug', 'Additional');

-- CreateEnum
CREATE TYPE "Enum_IssuePriority" AS ENUM ('Low', 'Medium', 'High');

-- CreateEnum
CREATE TYPE "Enum_IssueStatus" AS ENUM ('NotAssigned', 'Assigned', 'Estimated', 'InternalValidation', 'ClientValidation', 'Closed', 'Abandoned');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "commentId" TEXT NOT NULL,
ADD COLUMN     "projectCltId" TEXT NOT NULL,
ADD COLUMN     "projectDevId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "IssueComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "issueId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Enum_IssueType" NOT NULL,
    "priority" "Enum_IssuePriority" NOT NULL,
    "status" "Enum_IssueStatus" NOT NULL,
    "hourEstimate" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "IssueComment_id_key" ON "IssueComment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_id_key" ON "Issue"("id");

-- AddForeignKey
ALTER TABLE "IssueComment" ADD CONSTRAINT "IssueComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueComment" ADD CONSTRAINT "IssueComment_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_projectDevId_fkey" FOREIGN KEY ("projectDevId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_projectCltId_fkey" FOREIGN KEY ("projectCltId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
