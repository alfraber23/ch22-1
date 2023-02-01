package mx.generation;

public class FlujoControl {
	public static void main(String[] args) {
		/**
		 * Sintaxis de la condicion if
		 * 
		 * if (condicion) instruccion_si_condicion_true;
		 * 
		 * if (condicion){
		 * 		instrucciones si la condicion es true;
		 * }
		 * 
		 * if (condicion){
		 * 		instrucciones si la condicion es true;
		 * }else{
		 * 		instruciones si la condicion es false
		 * }
		 * 
		 * 
		 */
			boolean condition = false;
			
			System.out.println("Java 05");
			
			if (condition) System.out.println("La condicion es verdadera");
		
			if (condition) System.out.println("La variable condicion fue true");
			else System.out.println("La variable condicion fue false");
			
			int numeroEdoCuenta = 125668;
			if (numeroEdoCuenta < 1000) {
				System.out.println("El cliente es antiguo");
			} else {
				System.out.println("El cliente es nuevo");
			}
			
			
			int a = 8;
			int b = 3;
			int c = -5;
			
			System.out.println(a - b - c * 2);
	}

}
