import java.util.Scanner;

public class App {
    public static void main(String[] args){
        Scanner input=new Scanner(System.in);

        System.out.println("Please enter your weight");
        double weigt=input.nextDouble();

        System.out.println("Please enter your height");
        double height=input.nextDouble();

        double bmi=weigt / Math.pow(height, 2);

        String category = "";

        if (bmi<18.5){
            category="Underweight";
        } else if (bmi>=18.5 && bmi<25){
            category="Normal";
        } else if (bmi>=25 && bmi<30 ){
            category="Overweight";
        }else if (bmi>=30){
            category="Obese";
        }
        System.out.printf("Your BMI is %f, you belong to %s category \n", bmi, category);
    }
}




