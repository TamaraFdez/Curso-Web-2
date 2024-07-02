
using Microsoft.Extensions.DependencyInjection;

public class Program
{
    public static void Main(string[] args)
    {
        //configurar el contenedor de servicios
        var serviceCollection = new  ServiceCollection();
        serviceCollection.AddTransient<IMotor, MotorElectrico>();
        serviceCollection.AddTransient<Coche>(); 

        var serviceProvider = serviceCollection.BuildServiceProvider();

        var cocheElectrico = serviceProvider.GetService<Coche>();
        cocheElectrico.Arrancar();
    }
}