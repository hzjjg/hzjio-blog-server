import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value, {metatype}: ArgumentMetadata){
        if (!metatype || !this.toValidate(metatype)){
            return value;
        }

        const object = plainToClass(metatype, value);
        const error = await validate(object);

        if (error.length > 0){
            throw error;
        }

        return value;
    }

    private toValidate(metatype): boolean{
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }
}