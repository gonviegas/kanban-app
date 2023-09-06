/*
  Warnings:

  - Added the required column `isCompleted` to the `Subtask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subtask" ADD COLUMN     "isCompleted" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "description" TEXT NOT NULL;
