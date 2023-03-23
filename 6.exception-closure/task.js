﻿function parseCount(a){
    let parseResult = Number.parseFloat(a);
    if(Number.isNaN(parseResult)){
        throw new Error("Невалидное значение");
    }
    return parseResult;
}

function validateCount(a){
    try {
        return parseCount(a);
    } catch(error){
        return error;
    }
}



class Triangle {
    constructor (a, b, c){
        if((a + b) < c || (a + c) < b || (b + c) < a){
            throw new Error("Треугольник с такими сторонами не существует"); 
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    get perimeter(){
        return this.a + this.b + this.c;
    }

    get area(){
        let p = 0.5 * (this.perimeter);
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c); 
    } catch (error) {
        return {
            get area(){
                return "Ошибка! Треугольник не существует";
            },

            get perimeter(){
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
