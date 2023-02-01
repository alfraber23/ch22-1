package mx.generation;

public class Variables {

	public static void main(String[] args) {
		/**
		 * En java existen 8 datos primitivos:
		 * -byte: tipo numerico de 8 bits
		 * -short: tipo numerico de 16 bits
		 * -int: tipo numerico de 32 bits
		 * -long: tipo numerico de 64 bits
		 * -float: tipo numerico de punto flotante de 32 bits
		 * -double: tipo numerico de punto flotante de 64 bits
		 * -boolean: dato boleano (true o false)
		 * -char: caracter
		 */
		
		//definimos una variable de tipo byte (8 bits)
		byte variableTipoByte = 10;
		System.out.println("Byte: " + variableTipoByte);
		System.out.println("Max byte value: " + Byte.MAX_VALUE);
		System.out.println("Min byte value: " + Byte.MIN_VALUE);
		
		//Definimos una variable de tipo short (16 bits)
		short variableTipoShort = 125;
		System.out.println("Short: " + variableTipoShort);
		System.out.println("Max short value: " + Short.MAX_VALUE);
		System.out.println("Min short value: " + Short.MIN_VALUE);
		
		//Definimos una variable de tipo int (32 bits)
		int variableTipoInt = 1_256;
		System.out.println("Int: " + variableTipoInt);
		System.out.println("Max int value: " + Integer.MAX_VALUE); //2147483647
		System.out.println("Min int value: " + Integer.MIN_VALUE);
		
		//Declaramos una variable de tipo long (64 bits)
		long variableTipoLong = 123_456;
		System.out.println("Long: " + variableTipoLong);
		System.out.println("Max long value: " + Long.MAX_VALUE); //9223372036854775807
		System.out.println("Min long value: " + Long.MIN_VALUE);
		
		//Las literales numericas son de tipo int
		// ejemplo 85452, 0, -26846516
		
		//agregando la letra L (en mayuscula)
		//hacemos las literales numericas de tipo long
		long maxValue = 9223372036854775807L; 
		
		//Definimos una variable de tipo float
		/**
		 * Nota: las literales de punto flotante son de tipo double
		 * agregando la letra F (en mayuscula) hacemos las literales
		 * numericas de tipo float
		 */
		float variableTipoFloat = 25.23F;
		System.out.println("Float: " + variableTipoFloat);
		System.out.println("Max float value: " + Float.MAX_VALUE);
		System.out.println("Min float value: " + Float.MIN_VALUE);
		
		//Definimos una variable de tipo double (64 bits)
		double variableTipoDouble = 652.3256;
		System.out.println("Double: " + variableTipoDouble);
		System.out.println("Max double value: " + Double.MAX_VALUE);
		System.out.println("Min double value: " + Double.MIN_VALUE);
		
		System.out.println("Suma de 3.1 + 2.2 = " + ((3.1*10+2.2*10)/10));
		
		//Definimos una variable de tipo boolean
		boolean variableTipoBoolean = true;
		System.out.println("boolean: " + variableTipoBoolean);
		variableTipoBoolean = false;
		System.out.println("boolean: " + variableTipoBoolean);
		
		//Definimos una variable de tipo char
		//Solo almacena un caracter de la tabla Unicode (16 bits)
		//osea que puede almacenar del 0 al 65535
		//Se define entre apostrofes '' porque si no da error
		char variableTipoChar = 'K';
		System.out.println("char: " + variableTipoChar);
		variableTipoChar = '\u004c'; //L
		System.out.println("char: " + variableTipoChar);
		variableTipoChar = 77; //M
		System.out.println("char: " + variableTipoChar);
		//Asignar la letra Ñ en en numerico
		variableTipoChar = 209; //Ñ
		System.out.println("char: " + variableTipoChar);
		
		/**
		 * Reglas para el nombre de variables
		 * -Podemos usar cualquier caracter
		 * 	int myVar;
		 * 	int myVarEspañol; si se puede pero no se recomienda usar la ñ mejor usar ingles 
		 * -no se puede comenzar el nombre con numero
		 * 	int 5mentari05; no se puede
		 * 	int sinc0mentarios; si se puede poner numeros mientras no esten la inicio
		 * -utilizar en el nombre caracteres especiales solamente el $ y _
		 * 	int #myVar; no se puede
		 * 	int my#Var; no se puede
		 * 	int $myVar; si se puede pero no se recomienda
		 * 	int my$var; si se puede pero no se recomienda
		 */
		
		/**
		 * Representacion numerica
		 * int varHexadecimal = 0x3c
		 * int varBinario = 0b0011_1100
		 */
		
		//Conversion de tipos de datos
		//puedes cambiar el tipo de dato numerico de un pequeño a uno mas grande sin hacer nada
		//se le conoce como upcasting
			byte coquita600ml = 60;
			short coquita2lt = coquita600ml;
			System.out.println("coquita2lt: " + coquita2lt);
		//downcating
			short pozoleGrande = 200;
			byte burbujaPozole = (byte) pozoleGrande;
			System.out.println("pozole burbuja: " + burbujaPozole);
			
		//Los datos de tipo string son considerados objetos
		//se define solo con comillas dobles
			String varTipoString = "hola mundo";
			System.out.println("String: " + varTipoString);
			
		//Pasar string a numero
			byte edadMascota = Byte.parseByte("10");
			double edadPlaneta = Double.parseDouble("1256892");
			System.out.println("mascota: "+ edadMascota + " planeta: " + edadPlaneta);
			
		//Pasar datos numericos a un string
			String edadMascotaString = String.valueOf(edadMascota);
			System.out.println("Mascota string: " + edadMascotaString);
			char primerCaracter = edadMascotaString.charAt(0);
			System.out.println("Primer caracter: " + primerCaracter);
			
		/**
		 * Operadores numericos
		 * +, -, *, /, %, ++, --
		 */
			
			int operadorA = 10;
			int operadorB = 20;
			int suma = operadorA+operadorB;
			int resta = operadorA-operadorB;
			int multiplica = operadorA*operadorB;
			double division = (double)operadorA/operadorB;
			double residuo = (double)operadorA%2;
			System.out.println("Suma: " + suma); // 30
			System.out.println("Resta: " + resta); // -10
			System.out.println("Multiplica: " + multiplica); //200
			System.out.println("Division: " + division); //0.5
			System.out.println("Residuo: " + residuo); //
			
			//Incremento
			System.out.println("Preincremento: " + ++operadorA);
			System.out.println("Postincremento: " + operadorA++);
			System.out.println("valor A: " + operadorA);
			
			System.out.println("Predecremento: " + --operadorB);
			System.out.println("Postdecremento: " + operadorB--);
			System.out.println("valor B: " + operadorB);
			
			System.out.println("Resultado: "+ (10*2+4-20/2));
			
		/**
		 * Operadores comparativos
		 * <, <=, >, >=, ==, !=
		 */
			
			int numeroEmpleados = 1000;
			System.out.println("Empleados > 1000: " + (numeroEmpleados>1000));
			System.out.println("Empleados >= 1000: " + (numeroEmpleados>=1000));
			System.out.println("Empleados < 1000: " + (numeroEmpleados<1000));
			System.out.println("Empleados <= 1000: " + (numeroEmpleados<=1000));
			System.out.println("Empleados == 1000: " + (numeroEmpleados==1000));
			System.out.println("Empleados != 1000: " + (numeroEmpleados!=1000));
			System.out.println("Resultado: "+ (numeroEmpleados>1000 || numeroEmpleados==100));
			
		/**
		 * Operadores logicos
		 * && (and) se retorna true si ambos operandos son true
		 * || (or) se retorna true si uno de los operandos es true
		 * ! (not) revierte el resultado
		 */
			//System.out.println("Operacion 15 && 'hola' " + (15 && "hola")); esto no se puede
			System.out.println("numeroEmpleados<1000 || numeroEmpleados>1000: "+ (numeroEmpleados<1000 || numeroEmpleados>1000));
			
			boolean a = true;
			boolean b = false;
			boolean c = true;
			System.out.println("boolean es: " + ((a && b)||(a&&c))); //true
			System.out.println("boolean es: " + (a || b || c && a)); //true
			System.out.println("boolean es: " + (!(a||b)&&(!a||c))); //false

			
			
			
			
	}
	
	
}
