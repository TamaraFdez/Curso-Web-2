public class Coche{
    private IMotor _motor;

    public Coche(IMotor motor)
    {
        _motor = motor;
    }
    public void Arrancar()
    {
        _motor.Arrancar();
    }

    public void Parar()
    {
        _motor.Parar();
    }
}