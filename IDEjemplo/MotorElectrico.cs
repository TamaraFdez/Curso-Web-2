public class MotorElectrico : IMotor
{
    public void Arrancar()
    {
        Console.WriteLine("Motor Electrico arrancado Buzzzzz");
    }

    public void Parar()
    {
         Console.WriteLine("Motor Electrico parado");
    }
}