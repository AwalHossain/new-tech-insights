import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUserByID(id: number) {
    return this.prisma.user.findUnique({
      where: {id}
    });
  }

  async updateUserByID(id: number, data: Prisma.UserUpdateInput){
    const user = await this.prisma.user.findFirst({
      where: {id}
    })
    if(!user){
      throw new HttpException('User not found', 404)
    }
    if(data.username){
      let userInfo = await this.prisma.user.findUnique({
        where:{username: user.username as string}
      })
      if(userInfo){
        throw new HttpException('Username already found', 404)
      }

      return this.prisma.user.update({
        where: {id},
        data
      });
    }
  }


  async deleteUserByID(id: number) {
    const user = await this.prisma.user.findFirst({
      where: {id}
    })
    if(!user){
      throw new HttpException('User not found', 404)
    }
    return this.prisma.user.delete({
      where: {id}
    });
  }
}
