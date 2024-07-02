public class MotorCombustion : IMotor
{
    public void Arrancar()
    {
        Console.WriteLine("Motor Combustion arrancado Brummm run run");
    }

    public void Parar()
    {
         Console.WriteLine("Motor Electrico parado");
    }
}