$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8086/")
$listener.Start()
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $localPath = "d:\rcb" + $request.Url.LocalPath.Replace("/", "\")
    if ($localPath -eq "d:\rcb\") { $localPath = "d:\rcb\index.html" }
    
    if (Test-Path $localPath) {
        $content = [System.IO.File]::ReadAllBytes($localPath)
        if ($localPath.EndsWith(".html")) {
            $response.ContentType = "text/html"
        } elseif ($localPath.EndsWith(".css")) {
            $response.ContentType = "text/css"
        } elseif ($localPath.EndsWith(".js")) {
            $response.ContentType = "application/javascript"
        }
        $response.ContentLength64 = $content.Length
        $output = $response.OutputStream
        $output.Write($content, 0, $content.Length)
        $output.Close()
    } else {
        $response.StatusCode = 404
        $response.Close()
    }
}
