<?php namespace App\Http\Middleware;

use Closure;

class LocalesRedirect {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{

		$segment = app()['request']->segment(1);
		if ($segment != 'imagecache' && $segment != '_debugbar' && $segment != 'cp' && $segment != 'img' && $segment != 'images' && $segment != 'css' && $segment != 'js')
		{
			if (!in_array($segment, config('app.locales')))
				return redirect('/' . app()->getLocale() . '/' . app()['request']->path(), 301);
		}
		else{
			app()->setLocale('ru');
		}

		return $next($request);
	}

}
