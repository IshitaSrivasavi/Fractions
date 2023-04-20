class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }

    subtract(other) {
        if (other instanceof Fraction) {
            const num = this.numerator * other.denominator - this.denominator * other.numerator;
            const denom = this.denominator * other.denominator;
            return new Fraction(num, denom);
        } else {
            throw new Error("Invalid operand for subtraction.");
        }
    }
}
