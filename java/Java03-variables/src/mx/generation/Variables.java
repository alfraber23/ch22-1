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
		int variableTipoInt = 1256;
		System.out.println("Int: " + variableTipoInt);
		System.out.println("Max int value: " + Integer.MAX_VALUE); //2147483647
		System.out.println("Min int value: " + Integer.MIN_VALUE);
		
		//Declaramos una variable de tipo long (64 bits)
		long variableTipoLong = 123456;
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
		
	}
	
	
}
