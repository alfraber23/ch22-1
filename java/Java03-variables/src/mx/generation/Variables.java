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
		System.out.println("Max int value: " + Integer.MAX_VALUE);
		System.out.println("Min int value: " + Integer.MIN_VALUE);
		
		//Declaramos una variable de tipo long (64 bits)
		long variableTipoLong = 123456;
		System.out.println("Long: " + variableTipoLong);
		System.out.println("Max long value: " + Long.MAX_VALUE);
		System.out.println("Min long value: " + Long.MIN_VALUE);
	}
	
	
}
